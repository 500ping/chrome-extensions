window.onload = () => {
    branchName = '';
    taskName = document.querySelector('#content > h2').textContent.trim();
    taskDesc = document.getElementsByTagName('h3')[4].textContent.trim();

    taskName = taskName.toLowerCase();
    taskDesc = taskDesc.toLowerCase();

    taskDesc = taskDesc.replace('[','');
    taskDesc = taskDesc.replace(']','');
    taskDesc = taskDesc.replace(' - ',' ');

    taskDesc = taskDesc.split(' ');
    taskDesc = taskDesc.join('_');

    if ( taskName.startsWith("task") ) {
        branchName = taskName.substring(6,) + '_' + taskDesc;
    } 
     
    if ( taskName.startsWith("bug") ) {
        branchName = taskName.substring(5,) + '_' + taskDesc;
    }

    document.querySelector('.contextual').prepend(branchName);
}

