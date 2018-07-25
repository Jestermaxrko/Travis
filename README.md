"# pixelistic_be" 

To register users server recieves object like this: 
{
	nickname: 
	email:
	password:
	passwordConf:
}

After successfull registration user object is:  
{
	_id:
	nickname: 
	email:
	password:
	passwordConf:
	isAdmin:
}

In case of succes login or register server sends user object
In case of error - error object

To get user object: response.user;
To get error : response.error;

