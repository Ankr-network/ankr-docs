import React from 'react';
import cn from 'clsx';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const TypeToEmoji = {
  default: '🖖',
  note: '✏',
  info: 'ℹ',
  tip: '💡',
  success: '✅',
  warning: '⚠️',
  error: '🚫'
}

const themes = {
  default: {
    light: 'bg-gray-100 text-gray-900 border-gray-200 ',
    dark: 'bg-gray-800 text-gray-200 border-gray-200/30'
  },
  note: {
    light: 'bg-yellow-50 text-yellow-900 border-yellow-200',
    dark: 'bg-yellow-700/30 text-yellow-200 border-yellow-100/30'
  },
   info: {
    light: 'bg-sky-50 text-sky-900 border-sky-200',
    dark: 'bg-sky-800/30 text-sky-200 border-sky-200/30'
  },
  tip: {
    light: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    dark: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30'
  },
  success: {
    light: 'bg-green-100 text-green-800 border-green-200',
    dark: 'bg-green-500/20 text-green-300 border-green-400/30'
  },
  warning: {
    light: 'bg-orange-50 text-orange-800 border-orange-200',
    dark: 'bg-orange-400/20 text-orange-300 border-orange-400/30'
  },
  error: {
    light: 'bg-rose-50 text-rose-900 border-rose-200 ',
    dark: 'bg-rose-900/30 text-rose-200 border-rose-200/30'
  },
}

export function Callout({
  children,
  type = 'default',
  emoji = TypeToEmoji[type]
}) {
  const { resolvedTheme } = useTheme();
  const [ rootClasses, setRootClasses ] = useState('');

  useEffect(() => {
    setRootClasses(cn(
      'nextra-callout border mt-6 flex rounded-lg py-2 ltr:pr-4 rtl:pl-4',
      'contrast-more:border-current',
      themes[type][resolvedTheme === 'light' ? 'light' : 'dark'],
    ));
  }, [cn, resolvedTheme, type])

  return (
    <div
      className={rootClasses}
    >
      <div
        className="select-none text-xl ltr:pl-3 ltr:pr-2 rtl:pr-3 rtl:pl-2"
        style={{
          fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        }}
      >
        {emoji}
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  )
}