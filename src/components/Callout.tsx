'use client';

import cn from 'clsx';
import { Default, Error, Info, Note, Success, Tip, Warning } from 'icons';
import { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = {
  default: {
    light: 'bg-gray-100 text-gray-900 border-gray-200 ',
    dark: 'bg-gray-800 text-gray-200 border-gray-200/30',
  },
  note: {
    light: 'bg-yellow-50 text-yellow-900 border-yellow-200',
    dark: 'bg-yellow-700/30 text-yellow-200 border-yellow-100/30',
  },
  info: {
    light: 'bg-sky-50 text-sky-900 border-sky-200',
    dark: 'bg-sky-800/30 text-sky-200 border-sky-200/30',
  },
  tip: {
    light: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    dark: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30',
  },
  success: {
    light: 'bg-green-100 text-green-800 border-green-200',
    dark: 'bg-green-500/20 text-green-300 border-green-400/30',
  },
  warning: {
    light: 'bg-orange-50 text-orange-800 border-orange-200',
    dark: 'bg-orange-400/20 text-orange-300 border-orange-400/30',
  },
  error: {
    light: 'bg-rose-50 text-rose-900 border-rose-200 ',
    dark: 'bg-rose-900/30 text-rose-200 border-rose-200/30',
  },
};

const icons = {
  default: Default,
  error: Error,
  info: Info,
  note: Note,
  success: Success,
  tip: Tip,
  warning: Warning,
};

interface CalloutProps {
  children: React.ReactNode;
  emoji?: string;
  type?: 'default' | 'error' | 'info' | 'note' | 'success' | 'tip' | 'warning';
}

export function Callout({
  children,
  emoji /* string | undefined */,
  type = 'default',
}: CalloutProps) {
  const { resolvedTheme = 'light' } = useTheme();
  const [themeClassName, setThemeClassName] = useState('');

  const icon = useMemo(() => {
    if (typeof emoji === 'string') {
      return emoji;
    }

    const TargetIcon = icons[type];

    return typeof TargetIcon === 'undefined' ? null : <TargetIcon />;
  }, [emoji, type]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeClassName(
      themes[type]?.[resolvedTheme === 'light' ? 'light' : 'dark'],
    );
  }, [resolvedTheme, type]);

  const className = cn(
    'nextra-callout border mt-6 flex rounded-lg py-2 ltr:pr-4 rtl:pl-4',
    'contrast-more:border-current',
  );

  return (
    <div className={cn(className, themeClassName)}>
      {icon && <div className="nextra-callout-icon-area">{icon}</div>}

      <div className="min-w-0">{children}</div>
    </div>
  );
}
