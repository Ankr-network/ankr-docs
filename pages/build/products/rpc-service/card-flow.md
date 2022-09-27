import { Callout } from "nextra-theme-docs";

# Card Payment Activation

<Callout type="warning" emoji="❗">
The card payment flow is unavailable for common users until the end of the _Beta-testing_ stage.
</Callout>

Hi, dear user. We've implemented a card payment functionality for those who prefer things old-school. We know there are still some tweaks to be done about the flow to make it smooth, so here is the step-by-step guide for you to ease the path: 

1. First things first, check your inbox for the **Ankr Card Payment** email.  
    Follow the _link_ in it to get things rolling.

    <img src="/docs/build/card-email-invite.png" alt="Card payment email" class="responsive-pic" width="700" />

2. You find yourself in the **Add your Email** dialog.  
    We've already got your address filled in — just click **Submit**.

    <img src="/docs/build/card-add-email.png" alt="Add email" class="responsive-pic" width="700" />

3. Now, you have to verify the email address submitted — go back to your inbox, find the one from Ankr, and click the button to confirm the specified email belongs to you.

    <img src="/docs/build/card-email-confirm.png" alt="Card payment email" class="responsive-pic" width="700" />

4. You find yourself prompted by MetaMask as we use it to sign in to Premium Account:  
    * Click **Provide** — to use your public key for token encryption.  
    * Click **Sign** — to confirm interactions with our platform.

    <img src="/docs/build/card-metamask.png" alt="MetaMask" class="responsive-pic" width="700" />

5. You find yourself on the **Settings** pane. Yeah, we know that it's kinda weird, but you're already here, so these are your options:   
    * _[Optional step]:_ If you'd like to use some other email address for your Premium Account, click **Change Email**, provide a new one, and then verify it via the link sent to the address specified, which will eventually land you once again to this same pane — **Settings**.  
    * _[Required step]:_ If you feel quite right about using the current email address, just move to **Billing**, clicking it in **Sidebar**.

    <img src="/docs/build/card-settings.png" alt="Settings" class="responsive-pic" width="700" />

6. Now, you're on the **Billing** pane.  
    Here, you have to interact exclusively with the **Top Up Balance** block (far right):  
    * Make sure the toggle is set to **USD** and click **Top Up**.

    <img src="/docs/build/card-billing.png" alt="Settings" class="responsive-pic" width="700" />

7. Congrats — you've come to a standard **Card Payment** page!  
    Just enter the fields and click **Pay** to get things done.
   <img src="/docs/build/card-stripe.png" alt="Stripe payment" class="responsive-pic" width="700" />

That's the whole story to the card payment activation. We're working to make the flow smoother, but right now if you follow the guide step by step, you'll be all right.