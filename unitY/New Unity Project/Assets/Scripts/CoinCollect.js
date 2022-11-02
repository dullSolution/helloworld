

function OnTriggerEnter(info:Collider){
	var coinAudio:AudioSource=GetComponent.<AudioSource>();
	coinAudio.Play();
	
	CoinSystem.coinscollect=CoinSystem.coinscollect + 1;
	transform.position=Vector3(0,-50,0);
	yield WaitForSeconds(0.5);
	
	Destroy(gameObject);
	
	
}	