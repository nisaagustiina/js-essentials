let userRole = "admin";
let accessLevel;

if(userRole === 'admin'){
    accessLevel = 'Full access granted';
}else if(userRole === 'manager'){
    accessLevel = 'Limited access granted';
}else{
    accessLevel = 'No access granted';
}

console.log('Access Level:', accessLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === 'admin'){
        userMessage = 'Welcome, Admin!';
    }else{
        userMessage = 'Welcome, User!';
    }
}else{
    userMessage = 'Please log in to access the system.';
}

console.log('User Message:', userMessage);

let userType = 'admin';
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown"; 
}

console.log('User Category:', userCategory);

//ternary opearator
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? 'Authenticated' : 'Not Authenticated';
console.log("Authentication Status:", authenticationStatus);


let role = prompt('Input your role: ', 'Employee');

if(role === 'Employee'){
    alert('You have full accessed!');
}else if(role === 'Enrolled Member'){
    alert('You have accessed to dietary services and 1on1 interaction with a dietician!');
}else if(role === 'Subscriber'){
    alert('You have partical accessed to facilitate "Dietary Services" only!');
}else{
    alert('You have to enroll or at least subscribe first to avail this facility!');
}
