export const isCoinbase = () => {
  let isCoinbase = false
  if (window.ethereum) {
    try {
      isCoinbase =
        (window.ethereum as any)?.isCoinbaseWallet ||
        (window.ethereum as any)?.providers[0].isCoinbaseWallet
    } catch (err) {
      isCoinbase = false
    }
  }
  return isCoinbase
}
