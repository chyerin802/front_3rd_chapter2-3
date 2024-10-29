declare global {
  type PropsWithClassName<T> = T & { className?: string }
}

export {}
