if (typeof(window.RomanNumerals) === "undefined") {
  (function() {
    window.RomanNumerals = {
      values: {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      },

      toDecimal: function(numerals) {
        var sum = 0;
        var maxNumeral = 0;
        for (var i = numerals.length - 1; i >= 0; i--) {
          var value = RomanNumerals.valueFor(numerals.charAt(i));
          if (value < maxNumeral) {
            sum -= value;
          } else {
            sum += value;
          }
          maxNumeral = Math.max(value, maxNumeral);
        }
        return sum;
      },

      valueFor: function(numeral) {
        return RomanNumerals.values[numeral.toUpperCase()] || 0;
      },

      calculate: function() {
        var value = RomanNumerals.toDecimal(document.getElementById('numerals').value);
        document.getElementById('decimal').innerHTML = value;
      }
    }
  })();
}