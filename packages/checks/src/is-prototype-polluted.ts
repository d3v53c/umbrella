export const isPrototypePolluted = (key: string): Boolean => ['__proto__', 'prototype', 'constructor'].includes(key);