import { Text, Tooltip } from '@mantine/core';
import { useLanguage } from '../context/LanguageContext';
import type { GitHubCalendarDay } from '../data/types';

const MAX_LEVEL = 4;
const WEEKDAY_ROWS = [1, 3, 5];

export default function ContributionGrid({ days }: { days: GitHubCalendarDay[] }) {
  const { t, lang } = useLanguage();
  const { about } = t;
  const locale = lang === 'pt' ? 'pt-BR' : 'en-US';

  const max = days.reduce((highest, day) => Math.max(highest, day.count), 0) || 1;
  const levelOf = (count: number) =>
    count === 0 ? 0 : Math.min(MAX_LEVEL, Math.max(1, Math.ceil((count / max) * MAX_LEVEL)));

  const formatDay = (date: string) =>
    new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric', year: 'numeric' }).format(
      new Date(`${date}T00:00:00`),
    );

  const tooltipFor = (day: GitHubCalendarDay) => {
    const template =
      day.count === 0 ? about.heatmapNone : day.count === 1 ? about.heatmapOne : about.heatmapMany;
    return template.replace('{count}', String(day.count)).replace('{date}', formatDay(day.date));
  };

  const monthFormatter = new Intl.DateTimeFormat(locale, { month: 'short' });
  const months: (string | null)[] = [];
  let previousMonth = -1;
  for (let column = 0; column * 7 < days.length; column += 1) {
    const date = new Date(`${days[column * 7].date}T00:00:00`);
    months.push(date.getMonth() !== previousMonth ? monthFormatter.format(date) : null);
    previousMonth = date.getMonth();
  }

  const weekdayFormatter = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  const firstSunday = days.length > 0 ? new Date(`${days[0].date}T00:00:00`) : null;
  const weekdayLabels = WEEKDAY_ROWS.map((row) =>
    firstSunday
      ? weekdayFormatter.format(
          new Date(
            firstSunday.getFullYear(),
            firstSunday.getMonth(),
            firstSunday.getDate() + row,
          ),
        )
      : null,
  );

  return (
    <>
      <Text className="stats-block-title">{about.heatmapTitle}</Text>

      <div className="heat-scroll">
        <div className="heat-inner">
          <div className="heat-weekdays">
            {weekdayLabels.map((label, row) => (
              <span key={row}>{label}</span>
            ))}
          </div>

          <div>
            <div className="heat-months">
              {months.map((label, column) => (
                <span key={column}>{label ?? ''}</span>
              ))}
            </div>

            <div className="heat-grid">
              {days.map((day) => (
                <Tooltip
                  key={day.date}
                  label={tooltipFor(day)}
                  openDelay={300}
                  multiline
                  withinPortal
                >
                  <div className="heat-cell" data-level={levelOf(day.count)} />
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="heat-legend">
        <Text span>{about.heatmapLess}</Text>
        {[0, 1, 2, 3, 4].map((level) => (
          <span key={level} className="heat-cell" data-level={level} />
        ))}
        <Text span>{about.heatmapMore}</Text>
      </div>
    </>
  );
}
