var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.poroh1ov@yahoo.com"
    },
];

const pattern = /^[a-zA-Z0-9._-]+@(gmail|yahoo)\.(com)$/ig;
var approvedEmail = [];
arr.forEach (obj => {
    if (pattern.test(obj.email)) {
        approvedEmail.push(obj.email);
    }
})

console.log(approvedEmail)
