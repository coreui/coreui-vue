const getUID = (prefix: string) => {
  do {
    prefix += Math.floor(Math.random() * 1_000_000)
  } while (document.getElementById(prefix))

  return prefix
}

export default getUID
