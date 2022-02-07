<?php
	$compte = array(array('pseudo'=>'login1','score'=>15),array('pseudo'=>'login2','score'=>5));
	$html = "<table>";
	for ($i=0;$i<count($compte);$i++){
		$joueurs=$compte[$i];
		foreach($joueurs as $c=>$v)
			$$c=$v;
		$html=$html."<tr><td>$pseudo</td><td>$score</td></tr>";
	}
	$html.="</table>";

	echo $html;
?>
