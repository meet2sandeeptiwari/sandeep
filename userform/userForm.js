function userForm(req,resp){
    resp.write(`
        <form action="/submit" method="post">
            <input type="text" placeholder="enter the name1" name="name" />
            <input type="text" placeholder="enter the email" name="email" />
            <button>Submit</button>
        </form>
        `)
}

module.exports=userForm;