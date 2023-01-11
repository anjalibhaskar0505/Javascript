var mytodo_list =["Do Exercise" ,"Take bath" ,"Have Breakfast"];

//CREATE
function CreateTask()
{
    var task=document.getElementById("add-task").value;
    mytodo_list.push(task);
    ReadAllTask();
}

//READ
function ReadAllTask()
{
    var data='';
    for(var i=0;i<mytodo_list.length;i++)
    {
        data+='<tr>';
        data+='<td>' + mytodo_list[i] + '</td>';
        data+='<td><button onclick=UpdateTask(' +i+ ')>Update</button></td>';
        data+='<td><button onclick=DeleteTask(' +i+ ')>Delete</button></td>';
        data+='<tr>';
    }

    // counter

    document.getElementById("counter").innerHTML=mytodo_list.length +"Task";
    document.getElementById("mytodo-tasks").innerHTML=data;
}
ReadAllTask();

// UPDATE

function UpdateTask(item)
{
    document.getElementById("UpdateForm").style.display='block';
    document.getElementById("update-task").value=mytodo_list[item];
    document.getElementById("UpdateForm").onsubmit=function()
    {
        var task =document.getElementById("update-task").value;
        mytodo_list.splice(item,1,task.trim());

        ReadAllTask();
        closeInput();
    }
}

// DELETE

function DeleteTask(item)
{
    mytodo_list.splice(item,1);
    ReadAllTask();
}

function closeInput()
{
    document.getElementById("UpdateForm").style.display='none';
}