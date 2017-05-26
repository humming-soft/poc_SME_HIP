$(document).ready(function(){
	
	
	
	// show hide answer content
	
	$('.answer_plate').click(function(){
		$('.answer_content').addClass('hidden');
		$(this).find('.answer_content').removeClass('hidden');
	})
	
	
	// navigation
	
	// $('.q1_btn_proceed').click(function(){
	// 	$('.set_qx').addClass('hidden');
	// 	$('.set_q2').removeClass('hidden');
	// })
	
	// $('.q2_btn_proceed').click(function(){
	// 	$('.set_qx').addClass('hidden');
	// 	$('.set_q3_n').removeClass('hidden');
	// })
	// 	$('.q2_btn_back').click(function(){
	// 		$('.set_qx').addClass('hidden');
	// 		$('.set_q1').removeClass('hidden');
	// 	})
	
	// $('.q3_btn_proceed').click(function(){
	// 	$('.set_qx').addClass('hidden');
	// 	$('.set_q4').removeClass('hidden');
	// })
	// 	$('.q3_btn_back').click(function(){
	// 		$('.set_qx').addClass('hidden');
	// 		$('.set_q2').removeClass('hidden');
	// 	})

	$('.q1_n_btn_proceed').click(function(){
		$('.set_qx').addClass('hidden');
		$('.set_q2_n').removeClass('hidden');
	})
	
		$('.q2_n_btn_proceed').click(function(){
			$('.set_qx').addClass('hidden');
			$('.set_q3_n').removeClass('hidden');
		})
			$('.q2_n_btn_back').click(function(){
				$('.set_qx').addClass('hidden');
				$('.set_q1').removeClass('hidden');
			})
		
		$('.q3_n_btn_proceed').click(function(){
			$('.set_qx').addClass('hidden');
			$('.set_q4_n').removeClass('hidden');
		})
			$('.q3_n_btn_back').click(function(){
				$('.set_qx').addClass('hidden');
				$('.set_q2_n').removeClass('hidden');
			})
	
	$('.q1_y_btn_proceed').click(function(){
		$('.set_qx').addClass('hidden');
		$('.set_q2_y').removeClass('hidden');
	})
	
		$('.q2_y_btn_proceed').click(function(){
			$('.set_qx').addClass('hidden');
			$('.set_q3_y').removeClass('hidden');
		})
			$('.q2_y_btn_back').click(function(){
				$('.set_qx').addClass('hidden');
				$('.set_q1').removeClass('hidden');
			})
		
		$('.q3_y_btn_proceed').click(function(){
			$('.set_qx').addClass('hidden');
			$('.set_q4_y').removeClass('hidden');
		})
			$('.q3_y_btn_back').click(function(){
				$('.set_qx').addClass('hidden');
				$('.set_q2_y').removeClass('hidden');
			})
	
	
	
	
	
});

