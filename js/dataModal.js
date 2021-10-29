$(function() {
    $('body').append('<div id="data-modal"><div class="close"><span></span><span></span></div></div>');

	$('[data-modal]').on('click', function() {
		const modalPath = $(this).data('modal'),
			  modalType = $(this).data('modal_type');
		if (modalType === 'video') {
			$('#data-modal').append(`<video src="${modalPath}" playsinline controls autoplay id="data-modal_content"></video>`);
		} else if (modalType === 'img') {
			$('#data-modal').append(`<img src="${modalPath}" alt="" id="data-modal_content">`);
		}
		$('#data-modal').addClass('active');
	});

	$('#data-modal .close').on('click', function() {
		$('#data-modal').removeClass('active');
		$('#data-modal_content').remove();
	});
});