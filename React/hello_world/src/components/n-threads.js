function permutation(str, prefix, n) {
    if (n == 0) {
        console.log(prefix);
    }
    else {
        for (let i = 0; i < str.length; i++) {
            permutation(str, prefix + str[i], n - 1);
        }
    }
}

permutation("APMRV", "", 5);