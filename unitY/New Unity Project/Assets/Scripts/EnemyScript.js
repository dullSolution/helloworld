var enemyhealth:int=50;

function DeductPoints(hitpoints:int){
	enemyhealth=enemyhealth-hitpoints;
}

function Update(){
	if(enemyhealth<=0){
		Destroy(gameObject);
	}
}