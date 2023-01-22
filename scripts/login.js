const username = document.getElementById('inputUsername')
const password = document.getElementById('inputPassword')
const btn = document.getElementById('loginBtn')
function event(event){
	let results = document.getElementById('results')
	if(btn){
		btn.addEventListener(event, ()=>{
			results.innerHTML=`
			<hr id='bar'>
			<div id='resu'>
				<h3>Hi ${username.value}, welcome to LiveKing.</h3>
				<br>
				<a href='/'>Back to home page</a>
			</div>
			`
			let bar = document.getElementById('bar')
			let resu = document.getElementById('resu')
			resu.style.marginTop = '10px'
			bar.style.marginTop = '10px'
		})
	}
}

event('click')