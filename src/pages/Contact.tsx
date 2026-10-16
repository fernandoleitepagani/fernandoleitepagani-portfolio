import { useRef, useState, type ComponentType } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, Anchor, Group, Stack, Text, Title, UnstyledButton } from '@mantine/core';
import {
  IconAlertCircle,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconCheck,
  IconCopy,
  IconMail,
  IconRefresh,
} from '@tabler/icons-react';
import PageCard from '../components/PageCard';
import LattesIcon from '../components/icons/LattesIcon';
import EMAILJS_CONFIG from '../config/emailjs';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/content';

type FormStatus = 'idle' | 'sending' | 'sent' | 'partial' | 'error';

type IconComponent = ComponentType<{ size?: number; stroke?: number }>;

interface ContactLinkProps {
  icon: IconComponent;
  label: string;
  href: string;
}

function ContactLink({ icon: Icon, label, href }: ContactLinkProps) {
  const external = href.startsWith('http');
  return (
    <Anchor
      href={href}
      className="contact-card"
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <Icon size={16} stroke={1.5} />
      <span>{label}</span>
    </Anchor>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const { contact, about } = t;
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [copied, setCopied] = useState(false);

  const links: ContactLinkProps[] = [
    { label: contact.labelEmail, href: `mailto:${profile.emailWork}`, icon: IconMail },
    { label: contact.labelLinkedin, href: profile.linkedin, icon: IconBrandLinkedin },
    { label: contact.labelGithub, href: profile.github, icon: IconBrandGithub },
    { label: contact.labelInstagram, href: profile.instagram, icon: IconBrandInstagram },
    { label: contact.labelLattes, href: profile.lattes, icon: LattesIcon },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.emailWork);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current || status === 'sending') return;

    setStatus('sending');
    const formData = new FormData(form.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const time = new Date().toLocaleString();

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
      <PageCard accent>
        <Stack gap="md">
          <span className="availability">
            <span className="availability-dot" aria-hidden="true" />
            {about.available}
          </span>
          <Title order={1} className="page-title">
            {contact.title}
          </Title>
          <Text className="contact-intro">{contact.subtitle}</Text>

          <div className="contact-direct">
            <Anchor href={`mailto:${profile.emailWork}`} className="contact-email">
              {profile.emailWork}
            </Anchor>
            <UnstyledButton className="contact-copy" onClick={copyEmail} aria-live="polite">
              {copied ? <IconCheck size={14} stroke={2} /> : <IconCopy size={14} stroke={1.6} />}
              {copied ? contact.copied : contact.copyEmail}
            </UnstyledButton>
          </div>

          <Group gap="sm" className="contact-links">
            {links.map((link) => (
              <ContactLink key={link.label} {...link} />
            ))}
          </Group>
        </Stack>
      </PageCard>

      <PageCard>
        {status === 'sent' || status === 'partial' ? (
          <div className="contact-success" role="status" aria-live="polite">
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

            <Group justify="center" gap={6}>
              <IconCheck size={14} stroke={2} style={{ color: 'var(--online)' }} />
              <Text c="dimmed" size="xs">
                {contact.replyNote}
              </Text>
            </Group>
          </Stack>
        )}
      </PageCard>
    </Stack>
  );
}
