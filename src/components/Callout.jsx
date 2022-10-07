import React from 'react';
import cn from 'clsx';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const themes = {
  default: {
    light: 'bg-orange-50 text-orange-800 border-orange-100',
    dark: 'bg-orange-400/20 text-orange-300 border-orange-400/30'
  },
  tip: {
    light: 'bg-green-100 text-green-800 border-green-100',
    dark: 'bg-green-400/20 text-green-300 border-green-400/30'
  },
  success: {
    light: 'bg-green-100 text-green-800 border-green-100',
    dark: 'bg-green-400/20 text-green-300 border-green-400/30'
  },
  info: {
    light: 'bg-blue-100 text-blue-900 border-blue-200',
    dark: 'bg-blue-900/30 text-blue-200 border-blue-200/30'
  },
  note: {
    light: 'bg-gray-100 text-gray-900 border-gray-200 ',
    dark: 'bg-gray-900 text-gray-200 border-gray-200/30'
  },
  error: {
    light: 'bg-red-100 text-red-900 border-red-200 ',
    dark: 'bg-red-900/30 text-red-200 border-red-200/30'
  },
  warning: {
    light: 'bg-yellow-50 text-yellow-900 border-yellow-100',
    dark: 'bg-yellow-700/30 text-yellow-200 border-yellow-100/30'
  },
}

export function Callout({
  children,
  type = 'default',
  emoji = '💡'
}) {
  const { theme } = useTheme();
  const [ rootClasses, setRootClasses ] = useState('');

  useEffect(() => {
    setRootClasses(cn(
      'nextra-callout border mt-6 flex rounded-lg py-2 ltr:pr-4 rtl:pl-4',
      'contrast-more:border-current',
      themes[type][theme === 'light' ? 'light' : 'dark'],
    ));
  }, [cn, theme, type])

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