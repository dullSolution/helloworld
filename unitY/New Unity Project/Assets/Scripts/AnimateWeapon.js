function Update(){
	if(Input.GetKey(KeyCode.P)){
		GetComponent.<Animation>().Play("WeaponAttack");
	}
}