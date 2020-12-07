import parsableFiles from '../constants/parsable-files'

function checkParsability(folder: string): boolean {
  const [, first, second] = folder.split('.')
  if (first === 'test') return false
  if (parsableFiles.some((el: string) => first === el)) return true
  if (parsableFiles.some((el: string) => el === second)) return true
  return false
}

export default checkParsability
