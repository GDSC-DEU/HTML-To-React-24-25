express = require('express');
cors = require('cors');

const app = express();
const port = 3000;

const todoListData = {
    'jihongeek' : {
        nextId : 0,
        tasks : []
    },
    'Junhwakang' : {
        nextId : 0,
        tasks : []
    },
    'hyojeong0407' : {
        nextId : 0,
        tasks : []
    },
    'jangnavi' : {
        nextId : 0,
        tasks : []
    },
    'kominjung04' : {
        nextId : 0,
        tasks : []
    },
    'minseok419' : {
        nextId : 0,
        tasks : []
    }
}  
app.use(express.json({ extended: true }));
app.use(cors());
app.route(`/users/:username/todolist/`)
    .get(function(req,res) {
        let username = req.params.username;
        if (!todoListData[username]) {
            res.status(400).send("올바르지 않은 요청입니다. 전송 데이터를 확인해 주세요");
            return; 
        }
        res.status(200).json(todoListData[username]);
    })
    .post(function(req,res){
        let username = req.params.username;
        if (!todoListData[username]) {
            res.status(400).send("올바르지 않은 요청입니다. 전송 데이터를 확인해 주세요");
            return; 
        }
        if (!req.body.title) {
            res.status(400).send("올바르지 않은 요청입니다. 전송 데이터를 확인해 주세요");
            return;
        }
        todoListData[username].tasks.push({
            id : todoListData[username].nextId++,
            title : req.body.title,
            createdAt  : new Date(),
        });
        res.status(201);
        res.json(req.body);
    });
app.route(`/users/:username/todolist/:id`)
    .delete(function (req,res){
        let username = req.params.username;
        let id = req.params.id;
        if (!todoListData[username]) {
            res.status(400).send("올바르지 않은 요청입니다. 전송 데이터를 확인해 주세요");
            return; 
        }
        if (!id) {
            res.status(400).send("올바르지 않은 요청입니다. 전송 데이터를 확인해 주세요");
            return;
        }
        let newTasks =  [];
        for (let i =0; i < todoListData[username].tasks.length; i++) {
            if (todoListData[username].tasks[i].id !== parseInt(id)) {
                newTasks.push(todoListData[username].tasks[i])
            }
        }
        todoListData[username].tasks = newTasks;
        res.status(200).send();
    })
    .put(function (req,res){
        let username = req.params.username;
        let id = req.params.id;
        if (!todoListData[username]) {
            res.status(400).send("올바르지 않은 요청입니다. 전송 데이터를 확인해 주세요");
            return; 
        }
        if (!id) {
            res.status(400).send("올바르지 않은 요청입니다. 전송 데이터를 확인해 주세요");
            return;
        }
        if (!req.body.title) {
            res.status(400).send("올바르지 않은 요청입니다. 전송 데이터를 확인해 주세요");
            return;
        }
        let newTasks =  [];
        for (let i =0; i < todoListData[username].tasks.length; i++) {
            if (todoListData[username].tasks[i].id === parseInt(id)) {
                newTasks.push({
                    id : todoListData[username].tasks[i].id,
                    title : req.body.title,
                    createdAt : todoListData[username].tasks[i].createdAt
                })
            } else {
                newTasks.push(todoListData[username].tasks[i]);
            }
        }
        todoListData[username].tasks = newTasks;
        res.status(200).json(req.body);
    });


app.listen(port, '0.0.0.0', function(){
    console.log("서버 동작 중...");
});