$(document).ready(function(){
	
	
	
	// show hide answer content
	
	$('.answer_plate').click(function(){
		$('.answer_content').addClass('hidden');
		$(this).find('.answer_content').removeClass('hidden');
	})
	
	
	// navigation
	
	$('.q1_btn_proceed').click(function(){
		$('.set_qx').addClass('hidden');
		$('.set_q2').removeClass('hidden');
	})
	
	$('.q2_btn_proceed').click(function(){
		$('.set_qx').addClass('hidden');
		$('.set_q3').removeClass('hidden');
	})
		$('.q2_btn_back').click(function(){
			$('.set_qx').addClass('hidden');
			$('.set_q1').removeClass('hidden');
		})
	
	$('.q3_btn_proceed').click(function(){
		$('.set_qx').addClass('hidden');
		$('.set_q4').removeClass('hidden');
	})
		$('.q3_btn_back').click(function(){
			$('.set_qx').addClass('hidden');
			$('.set_q2').removeClass('hidden');
		})
	
	
});

