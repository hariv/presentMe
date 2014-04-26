var authenticateUser=function(userId,userSecret,connection,callback)
{
    connection.query("SELECT * FROM `app_users` WHERE `name`=? AND `password`=?",[userId,userSecret],function(err,results){
	if(err)
	{
	    console.log("Error in user Authentication in querying users "+err);
	    return;
	}
	if(results.length>0)
	{
	    callback(results[0].id);
	}
	else
	    callback(0);
    });
}
var addSlide=function(presentationId,connection,callback)
{
    connection.query("INSERT INTO `app_slides` (`content`,`presentation`) VALUES (?,?)",['Click to add content',presentationId],function(err,results){
	if(err)
	{
	    console.log("Error creating new Slide, INSERT Query on app_slides "+err);
	    return;
	}
	callback();
    });
}
exports.authenticateUser=authenticateUser;
exports.addSlide=addSlide;
