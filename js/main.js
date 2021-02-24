// $(document).ready(function() {
//     $("#taskName").val("Dolly Duck");
// });

// $("#taskName").val("Dolly Duck");

function get_branch_name() {
    task_name = $("#taskName").val().trim();
    task_desc = $("#taskDesc").val().trim();

    task_name = task_name.toLowerCase();
    task_desc = task_desc.toLowerCase();

    task_desc = task_desc.replace('[','');
    task_desc = task_desc.replace(']','');
    task_desc = task_desc.replace(' - ',' ');

    task_desc = task_desc.split(' ');
    task_desc = task_desc.join('_')

    branch_name =  task_name + '_' + task_desc

    $("#taskBranch").val(branch_name);
}

$("#taskName").on('input',function() {
    get_branch_name();
});

$("#taskDesc").on('input',function() {
    get_branch_name();
});

$(".nav-tabs a").click(function(){
    $(this).tab('show');
});