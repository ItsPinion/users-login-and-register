const argon2 = require('argon2');

export async function hash(password:string) {
 const hash = await argon2.hash(password);
 return hash;
}
export async function verify(hash:string, password:string):Promise<boolean> {
  const isMatch = await argon2.verify(hash, password);
  return isMatch;
 }

