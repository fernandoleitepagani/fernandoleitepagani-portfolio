import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Alert,
  Anchor,
  Divider,
  Group,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core';
import {
  IconAlertCircle,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconCheck,
  IconMail,
  IconMapPin,
  IconRefresh,
  IconSchool,
} from '@tabler/icons-react';
import PageCard from '../components/PageCard';
import EMAILJS_CONFIG from '../config/emailjs';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/content';

type FormStatus = 'idle' | 'sending' | 'sent' | 'partial' | 'error';

export default function Contact() {
  const { contact } = useLanguage().t;
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

  const links = [
    { label: contact.email, href: `mailto:${profile.email}`, text: profile.email, icon: IconMail },
    { label: contact.emailWork, href: `mailto:${profile.emailWork}`, text: profile.emailWork, icon: IconMail },
    { label: contact.labelGithub, href: profile.github, text: 'fernandoleitepagani', icon: IconBrandGithub },
    { label: contact.labelLinkedin, href: profile.linkedin, text: 'fernandoleitepagani', icon: IconBrandLinkedin },
    { label: contact.labelInstagram, href: profile.instagram, text: '@fernandoleitepagani', icon: IconBrandInstagram },
    { label: contact.labelLattes, href: profile.lattes, text: contact.lattesText, icon: IconSchool },
    { label: contact.location, href: undefined, text: profile.location, icon: IconMapPin },
  ];

  const socials = [
    { href: profile.linkedin, icon: IconBrandLinkedin, label: contact.labelLinkedin },
    { href: profile.github, icon: IconBrandGithub, label: contact.labelGithub },
    { href: profile.instagram, icon: IconBrandInstagram, label: contact.labelInstagram },
    { href: `mailto:${profile.emailWork}`, icon: IconMail, label: contact.labelEmail },
  ];

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current || status === 'sending') return;

    setStatus('sending');
    const formData = new FormData(form.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const time = new Date().toLocaleString();

    // 1st call: notify me — if this fails nothing was delivered, so it is a real error.
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_FOR_ME,
        { name, email, message, time, title: `Portfolio contact — ${name}` },
        EMAILJS_CONFIG.PUBLIC_KEY,
      );
    } catch (err) {
      console.error('Error sending notification:', err);
      setStatus('error');
      return;
    }

    // 2nd call: auto-reply to the visitor — failing here is only partial success.
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_FOR_SENDER,
        { name, email, message, time, title: 'Thanks for your message' },
        EMAILJS_CONFIG.PUBLIC_KEY,
      );
      setStatus('sent');
    } catch (err) {
      console.error('Error sending auto-reply:', err);
      setStatus('partial');
    }
  };

  const resetForm = () => {
    form.current?.reset();
    setStatus('idle');
  };

  return (
    <Stack gap="xl">
      <PageCard>
        <Stack gap="lg">
          <Title order={1} className="page-title">
            {contact.title}
          </Title>
          {links.map(({ label, href, text, icon: Icon }) => (
            <Group key={label} gap="sm" align="flex-start" wrap="nowrap">
              <Icon size={18} stroke={1.5} style={{ marginTop: 2, flexShrink: 0, color: 'var(--ink-dim)' }} />
              <div>
                <Text c="dimmed" size="sm">
                  {label}
                </Text>
                {href ? (
                  <Anchor href={href} target="_blank" rel="noreferrer">
                    {text}
                  </Anchor>
                ) : (
                  <Text>{text}</Text>
                )}
              </div>
            </Group>
          ))}
        </Stack>
      </PageCard>

      <PageCard>
        {status === 'sent' || status === 'partial' ? (
          <div className="contact-success">
            <div className="contact-success-icon">
              <IconCheck size={38} stroke={2.5} />
            </div>
            <h2 className="contact-success-title">{contact.formSentTitle}</h2>
            <p className="contact-success-text">{contact.formSent}</p>
            {status === 'partial' && (
              <Alert
                variant="outline"
                color="orange"
                className="contact-success-warning"
                icon={<IconAlertCircle size={18} stroke={1.5} />}
                aria-live="polite"
              >
                {contact.formPartial}
              </Alert>
            )}
            <UnstyledButton className="contact-success-btn" onClick={resetForm}>
              <IconRefresh size={16} stroke={1.8} />
              {contact.formSendAnother}
            </UnstyledButton>
          </div>
        ) : (
          <Stack gap="md" align="stretch">
            <Title order={2} className="page-title" ta="center">
              {contact.formTitle}
            </Title>

            {status === 'error' && (
              <Alert
                variant="outline"
                color="red"
                icon={<IconAlertCircle size={20} stroke={1.5} />}
                title={contact.formError}
                aria-live="assertive"
              />
            )}

            {(status === 'idle' || status === 'sending') && (
              <Text c="dimmed" ta="center" size="sm">
                {status === 'sending' ? contact.formSending : contact.formSubtitle}
              </Text>
            )}

            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <input
                className="contact-input"
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder={contact.formName}
                disabled={status === 'sending'}
              />
              <input
                className="contact-input"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder={contact.formEmail}
                disabled={status === 'sending'}
              />
              <textarea
                className="contact-input contact-textarea"
                name="message"
                required
                rows={5}
                placeholder={contact.formMessage}
                disabled={status === 'sending'}
              />
              <UnstyledButton type="submit" className="contact-submit" disabled={status === 'sending'}>
                {status === 'sending' ? contact.formSending : contact.formSend}
              </UnstyledButton>
            </form>

            <Divider color="var(--separator)" my="xs" />

            <Group justify="center" gap="lg">
              {socials.map(({ href, icon: Icon, label }) => (
                <Anchor
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social"
                  aria-label={label}
                >
                  <Icon size={22} stroke={1.5} />
                </Anchor>
              ))}
            </Group>
          </Stack>
        )}
      </PageCard>
    </Stack>
  );
}