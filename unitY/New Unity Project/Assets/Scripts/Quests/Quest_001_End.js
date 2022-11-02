import UnityEngine.UI;

var TextBoxOnCheck:int=0;

var MessageBox:GameObject;

var TextBox :GameObject;

//var TextMessage:String;

var QuestBox:GameObject;
var QuestText:GameObject;
//var QuestName:String;

//var QuestItemToShow:GameObject;

function OnMouseDown(){
		if(TextBoxOnCheck==0){
			//QuestItemToShow.SetActive(true);
			TextBoxOnCheck=1;
			MessageBox.SetActive(true);
			//TextBox.SetActive(true);
			TextBox.GetComponent.<Text>().text="Villager:Thank you very much";
			//QuestName="Active Quest:None";
			QuestText.GetComponent.<Text>().text="Active Quest:None";
		}
		else{
					TextBoxOnCheck=0;
					MessageBox.SetActive(false);
					TextMessage="Village:Get going then!";
		}
}

function Update(){
	if(Input.GetKey(KeyCode.T)){
		if(TextBoxOnCheck==1){
		MessageBox.SetActive(false);
		TextBoxOnCheck=0;
		//TextMessage="Villager:Get going then!";
		}
		
	}
	if(Input.GetKey(KeyCode.N)){
		if(TextBoxOnCheck==1){
		MessageBox.SetActive(false);
		TextBoxOnCheck=0;
		//TextMessage="Villager:Get going then!";
		}
		
	}
}	