new Vue({
    el: '#calculator',
    data: {
        display: '',
        buttons: ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C']
    },
    methods: {
        pressButton(button) {
            if (button === '=') {
                // Evaluate the expression using JavaScript's eval function
                try {
                    this.display = eval(this.display);
                } catch {
                    this.display = 'Error';
                }
            } else if (button === 'C') {
                // Clear the display
                this.display = '';
            } else {
                // Add the button value to the display
                this.display += button;
            }
        }
    }
});
