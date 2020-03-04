const counters = document.querySelectorAll('.counter');
const speed = 400;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target'); // plus turns string into number
        const count = +counter.innerText;

        const inc = target/ speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    }

    updateCount();
})