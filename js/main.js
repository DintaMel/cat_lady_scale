// Main JS File for Cat Lady Scale

$(document).ready(function(){

    /*
     * Behavior Class
     * constructor - needs the description and pointValue to construct
     * listItem function - returns the behavior as an html string
     */
    function Behavior (description, pointValue) {
        this.description = description;
        this.pointValue = pointValue;
    }
    Behavior.prototype = {
        getListItem: function () {
            return '<div class="behavior-item">' +
                '<div class="description">' + this.description + '</div>' +
                '<div class="points">' + this.pointValue + '</div>' +
                '</div>';
        },
    }

    /*
     * Status Class
     * constructor - needs the title for the status and a corresponding image
     * imagePath function - returns local path to the image (for using in the src attr)
     */
    function Status (title, image) {
        this.title = title;
        this.image = image;
    }
    Status.prototype = {
        imagePath: function (){
            return 'images/' + this.image;
        }
    }

    /*
     * Cat Lady Behaviors
     * list of all possible behaviors to fill the drop down form
     */
    var catLadyBehaviors = [
        new Behavior("agrees that there's a cat gif for everything", +3),
        new Behavior("own one dog", -2),
        new Behavior("own one cat", +2),
        new Behavior("own more than one cat", +5),
        new Behavior("own more than one dog", -5),
        new Behavior("takes selfies with cats", +4),
        // -----------------------------------------------------------------------------------------
        // TODO: CHALLENGE 1 - Done
        // add some more behaviors cat lady behaviors here to customize your app!
        // -----------------------------------------------------------------------------------------
        new Behavior("allergic to cats", -5),
        new Behavior("own a hairless cat", +5)
    ];

    /*
     * Cat Lady Scale
     * description: the cat lady scale is indexed by the number on the scale. Each
     * scale number has an object with a title and image name associated with it.
     */
    var CAT_LADY_SCALE = {
        10: new Status("Cat-sylum", 'cat_lady.jpg' ),
        9: new Status("ALL OF THE CATS", 'all_kittens.jpg' ),
        8: new Status("Takin Selfies With Cats", 'cat_selfie.jpg' ),
        7: new Status("A One-Cat Kind of Human", 'one_cat.jpg' ),
        6: new Status("Cat Gifs Are...Alright", 'grumpy.jpg' ),
        5: new Status("Indifferent", 'cat_dog_friends.jpg' ),
        4: new Status("Ehh, Dogs Greater...", 'cat_backseat.jpg' ),
        3: new Status("Dogs are where it's at", 'dogs.jpg' ),
        2: new Status("I wish I were allergic", 'allergic.jpg' ),
        1: new Status("Cats...like, the musical?", 'cats.jpg' ),
        0: new Status("What\'s a cat? Never heard of \'em", 'dog_heaven.jpg' ),
    };




    /*
     * Cat Lady Object
     * behaviors - array of behavior objects
     * addBehavior - function that adds behavior and updates cat lady object as necessary
     * status - the current cat lady status object
     * updateStatus - function that updates the cat lady objects status
     */
    var catLady = {
        behaviors: [],
        addBehavior : function (newBehavior) {
            //--------------------------------------------------------------------------------------
            // TODO: CHALLENGE 2
            // Implement the add behavior function. This function should:
            // 1. add the behavior object to the behaviors list in *this* catLady object (<- that
            //    is a hint)...
            // 2. now that a new behavior is added... update *this* cat lady's status (hint you
            //    should just call a function in this object)
            //--------------------------------------------------------------------------------------

            this.behaviors.push(newBehavior);
            this.updateStatus();


        },
        status: CAT_LADY_SCALE[5], // just the inital status... INDIFFERENT
        pointValueSum: 5,
        updateStatus: function (value) {
            //--------------------------------------------------------------------------------------
            // TODO: CHALLENGE 8
            // Implement the evaluate function to calculate where on the scale this cat lady
            // is. This function should:
            // 1. Loop through this catLady's behaviors array, to calculate the sum of all behavior
            //    point values. ** when adding up the point values, start the sum at 5 (indifferent)
            //    on the scale.
            //--------------------------------------------------------------------------------------

            // var pointValueSum = 5;

//             for(var i=0; i < catLady.behaviors.length; i++){
//               // console.log(catLady.behaviors[0]['pointValue']);
//
//               console.log(catLady.behaviors[i]);
              // pointValueSum += catLady.behaviors[i]['pointValue'];
              catLady.pointValueSum += value;
              console.log('sum');
              console.log(catLady.pointValueSum);


            // }


            //--------------------------------------------------------------------------------------
            // TODO: CHALLENGE 9
            // Use the pointValue sum to determine where on the scale this cat lady is. Match the
            // sum to a value in the CAT_LADY_SCALE object. Get the Status object, located at the
            // corresponding scale position. And then update this catLady status property.
            //--------------------------------------------------------------------------------------


            if (catLady.pointValueSum >= 10){
              catLady.status= CAT_LADY_SCALE[10];
              console.log(catLady.status);
            }
            else if (catLady.pointValueSum < 10 && catLady.pointValueSum > 0 ){
              catLady.status=CAT_LADY_SCALE[catLady.pointValueSum];
              console.log(catLady.status);
            }
            else {
              console.log(catLady.status);
              catLady.status= CAT_LADY_SCALE[0];
            }

        },
    };

    /*
     * Add Behavior Click Event
     * handles when the user adds a behavior
     */
     //---------------------------------------------------------------------------------------------
     // TODO:
     // Implement the add-behavior event listener. This event listener should use js AND
     // jQuery to update the Cat Lady Scale page upon a user adding a behavior to their cat lady.
     // (see individual challenges below)
     //---------------------------------------------------------------------------------------------
    $('body').on('change', 'input[type=checkbox]', function(){

        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 5
        // 2. Grab the catLadyBehavior index value from the behavior option in the behavior-select
        //    field located in the html. This will be tricky... before you start try selecting
        //    different options in dropdown and observe what happens to the html.
        //------------------------------------------------------------------------------------------

        if($(this).is(':checked')){

          var index = Number($(this).val());
          console.log(index);
          catLady.updateStatus(index);
        }

        else{

          // changes sign of number so that it subtracts the value when updated.
          var index = -Number($(this).val());
          console.log(index);
          catLady.updateStatus(index);
        }


        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 6
        // 3. Use the index value from step 2, to get the correct cat lady behavior from the
        //    catLadyBehaviors array.
        // 4. Now add the behavior to the catLady object.
        //------------------------------------------------------------------------------------------


//add if statement to remove behavior if not :checked
//removed

        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 10
        // 1. Display the cat lady status, with the displayStatus function;
        //------------------------------------------------------------------------------------------
        displayStatus(catLady.status);

    });


    // $('.circle').hover(function(){
    //
    // })



    function displayStatus (catLadyStatus)
    {
        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 11
        // Here you should use jquery to to update the Cat Lady Status Display. To do this:
        // 1. update the status image src in the html
        // 2. update the status title in the html
        // ** make sure to checkout the status object for help!
        //------------------------------------------------------------------------------------------

        // updates image source
        $('.status-image img').attr('src', 'images/' + catLadyStatus['image'])

        // updates cat lady status text
        $('.status-title').html(catLadyStatus['title']);

        // updates scale
        $("div[data-index='" + catLady.pointValueSum +"'] div.circle").addClass;

        $('.selected').removeClass('selected')
        $('[data-index="' + catLady.pointValueSum + '"]').addClass('selected');

    }

    /*
     * Fill Behavior Check List
     * adds all behaviors from the catLadyBehaviors array as options in the html checklist
     */
    function fillBehaviorCheckList ()
    {
        for (var i = 0; i < catLadyBehaviors.length; i++) {
            var description = catLadyBehaviors[i].description;
            var points = catLadyBehaviors[i].pointValue;
            var option = '<div class="checkbox"><label><input type= "checkbox" class= "behavior-checklist"value="' + points +'">'
              + description + '</label></div>';
            console.log(option);
            $('#checklist').append(option);
        }
    }



    function createScale(){
      for (var i=0; i<Object.keys(CAT_LADY_SCALE).length; i++){

          var scaleIncrement = "<div class='scale-increment' title=" + '"'
          + CAT_LADY_SCALE[i]['title'] + '"' +
          "><!-- displays a circle --><div class='circle' data-index='" +
          i + "'></div><div class='scale-number'>" +
          i + "</div></div>";

          $('.scale').append(scaleIncrement);
          console.log(CAT_LADY_SCALE[i]['title']);
      }
    }


// Initial page load
    fillBehaviorCheckList(); // populates form with checklist
    createScale(); //creates cat lady status scale
    displayStatus(catLady.status); // display initial cat lady status
});
