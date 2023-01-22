export function getIndexConteiner(){
    let btn = document.getElementById('btn')
    let conteiner = document.getElementById('conteiner')
    
    btn.onclick = ()=>{
        conteiner.innerHTML=`
        <div class='formPost'>
            <div class='title'>
                <input type='text' id='username' placeholder='username...'>
            </div>
            <div class='postPost'>
                <textarea name="post" id="post" cols="70" rows="5" placeholder='Hello world...'></textarea>
            </div>
            <div class='btnPost'>
                <button id='btn2'>Send</button>
            </div>
        </div>
        `
        let username = document.getElementById('username')
        let post = document.getElementById('post')
        let btn2 = document.getElementById('btn2')
        btn2.onclick = ()=>{
            let posts = document.getElementById('posts')
            posts.innerHTML+=`
            <div class='postIndex'>
                <div class="userPost">
                    <div class="imgPostUser">
                        <div id="img"></div>
                    </div>
                    <div class="title">
                        <h4>${username.value}</h4>
                    </div>
                </div>
                <br>
                <div class="post">
                    <p>
                        ${post.value}
                    </p>
                </div>
            </div>
            `
            username.value = ''
            post.value = ''
        }
    }
}