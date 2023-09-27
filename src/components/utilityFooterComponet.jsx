import React from "react";
import jQuery from "jquery";

const UtilityComponent = (props) => {
	
	const closeUtilityComponent = () => {
		jQuery(($) => {
			
			$.noConflict();
			$(".cmp").addClass("d-none");
			$(".utility-component").removeClass("add-utility-component-height");
		});
	};
		
	const secondCloseUtiltyComponent = () =>{
		jQuery(($) => {
			
			//$(".cmp").addClass("d-none");
			$(document).on("mouseup",(function(props){
				props.preventDefault();
				//alert( "Handler for `mouseup` called." );
				var container = $(".utility-component");
				if (!container.is(props.target) && container.has(props.target).length === 0) 
				{
					//container.hide();
					$.noConflict();
					$(".cmp").addClass("d-none");
					$(".utility-component").removeClass("add-utility-component-height");
					
				}
			})
		)

		/*$(document).on('click', function (e) {
			if ($(e.target).closest(".utility-component").length === 0) {
				$(".utility-component").hide();
			}
		});*/
	});
	}
;


	return (

    <React.Fragment>
			<section onClick={secondCloseUtiltyComponent}
				className="utility-component align-items-center justify-content-around m-auto width-toggle-3"
				id="utilityComponent">
				<div
					className="utility-notch my-2"
					onClick={closeUtilityComponent }>
				</div>
				 
				{props.tags}
			</section>
      </React.Fragment>
	);
};

export default UtilityComponent;
