var assert = require('assert');

var Calculette = require('../calculette');

    // it('should return -1 when the value is not present', function() {
    //  assert.equal( [1, 2, 3].indexOf(4), -1 );
    // });

describe('Calculette', function() {
  describe('#constructor()', function() {

    it('should return 0 by default', function() {
      let calc = new Calculette();
      assert.equal( calc.value(), 0 )
    });

  });

  describe('#set()', function() {
    it('it should change the inner value of the calculette', function() {
      let calc = new Calculette();
      calc.set(100);
      let final = calc.value();

      assert.equal( final, 100 )
    });

   
    it('it should keep only the latest value set', function() {
      let calc = new Calculette();
      calc.set(50);
      calc.set(100);
      calc.set(200);
      let final = calc.value();

      assert.equal( final, 200 )
    });
  });

  describe('#reset()', function() {
    // it should return 0 after reset
    it('should return 0 after reset', function() {
      calc = new Calculette();
      assert.equal( calc.value(), 0  )
    });
  });


  describe('#add()', function() {
    it('it should not change the value when we add 0', function() {
      calc = new Calculette();
      calc.set(100)
      calc.add(0) // added value
    
      assert.equal( calc.value(), 100 )
    });
 
    it('should changes the inner value by a difference of X', function() {
      calc = new Calculette();
      calc.set(100)
      let initial = calc.value();
      let added = 98;
      calc.add(added) // added value
      let final = calc.value();

      assert.equal( final - initial, added )
    })
  })

  describe('#multiply()', function() {
    it('should not change the value when we multiply with 1', function() {
      calc = new Calculette();
      calc.set(100)
      calc.multiply(1)
      assert.equal( calc.value(), 100 ) 
    })
   
    it('should change to 0 when we multiply with 0', function() {
      calc = new Calculette();
      calc.set(100)
      calc.multiply(0)
      assert.equal( calc.value(), 0 ) 
    })

    it('should work even with negative values', function() {
      calc = new Calculette();
      calc.set(100)
      calc.multiply(-1)
      assert.equal( calc.value(), -100 ) 
    })
   
    // it changes the inner value by +X 
  });

  it('should allow composing functions', function() {
    calc = new Calculette()
    calc.set(100).add(10)
    assert.equal( calc.value(), 110)

    calc.reset().add(10).multiply(2)
    assert.equal( calc.value(), 20)

    calc.reset().multiply(2).add(10)
    assert.equal( calc.value(), 10)
  })


/*test add*/

/*describe('#add()', function() {
  it('it should not change the value when we add 0', function() {
    calc = new Calculette();
    calc.set(100)
    calc.add(0) // added value
  
    assert.equal( calc.value(), 100 )
  });

  it('should changes the inner value by a difference of X', function() {
    calc = new Calculette();
    calc.set(100)
    let initial = calc.value();
    let added = 98;
    calc.add(added) // added value
    let final = calc.value();

    assert.equal( final - initial, added )
  })
})
*/
/*test add*/

describe('#substract()', function() {
  it('La méthode substract doit retirer x de la valeur interne de la calculette', function() {
    calc = new Calculette();
    calc.set(100)
  })
})



  describe('#value()', function() {
    // je vérifie que la méthode existe
  });

});
