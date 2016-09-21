export function getToken(email,pass){
	if(email[0]=='/')
		return null
	const token = {
		uid: '123abc',
		role: 'clinician'
	}
	return token
}