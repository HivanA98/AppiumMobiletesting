describe('First testing use appium with webdriver', () => {
    
    it('Should succesfully fill the form', async () => {
        
        await $('~Login').Forms
        //await expect($('~Login-screen')).toBeDisplayed();

        await $('~text-input').click.setValue('Hai There, i`am Ivan')
        await expect($('~input-text-result')).toHaveValue('Hai There, i`am Ivan');

        await $('~switch').click
        await expect($('~switch-text')).toHaveValue('Click to turn the switch OFF');

        await $('~00000000-0000-0032-ffff-ffff00000058').click
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]').click
        await expect($('~00000000-0000-0032-ffff-ffff00000059')).toHaveValue('webdriver.io is awesome');

        //await $('~00000000-0000-0032-ffff-ffff00000064')
        await expect($('~00000000-0000-0032-ffff-ffff00000063')).toHaveValue('Clickable=false');
    });



});