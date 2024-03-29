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
        'M': 1000,
        '\u2182': 10000
      },

      reverseNumerals: ['\u2182', 'M\u2182', 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],

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

      toNumeral: function(value) {
        if (value <= 0 || value > 1000000) {
          return 'N';
        }

        var remaining = value;
        var numerals = "";
        for (var i = 0; i < RomanNumerals.reverseNumerals.length; i++) {
          currentNumeral = RomanNumerals.reverseNumerals[i];
          currentNumeralValue = RomanNumerals.toDecimal(currentNumeral);
          while (currentNumeralValue <= remaining) {
            numerals += currentNumeral;
            remaining -= currentNumeralValue;
          }
        }
        return numerals;
      },

      valueFor: function(numeral) {
        return RomanNumerals.values[numeral.toUpperCase()] || 0;
      },

      calculate: function(conversionFunction, inputId, outputId) {
        var valueToConvert = document.getElementById(inputId).value;
        var convertedValue = conversionFunction.call(this, valueToConvert);
        document.getElementById(outputId).value = convertedValue;
      }
    }
  })();
}