const isDefined = (value) => {
  return value !== null && value !== undefined
}

export const formatCurrency = (amount, showSign = true) => {
  if (isDefined(amount)) {
    return [showSign ? `₦` : '', amount.toLocaleString()].join('')
  }
  return undefined
}
