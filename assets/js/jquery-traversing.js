/**
 * Created by workstation on 06.02.17.
 */

/**
 * .parent();
 * .parents("filter");
 * $("start").parentsUntil("stop");
 * .children("filter");
 * .find("filter");
 * .siblings()
 * .next()
 * .nextAll()
 * .nextUntil()
 * .prev()
 * .prevAll()
 * .prevUntil();
 * .first();
 * .last();
 * .eq();
 * .filter();
 * .not();
 */

/*
 Get Parent Dom Elements
 // Direct
 console.log($("h2").parents());
 // All DIVS
 console.log($("h2").parents("div"));
 // FROM - TO
 console.log($("h2").parentsUntil("html"));
 */

/*
 Get Child Elements of Selector
 $("Selector").find("a.button")
 $("Selector").children("elem")
 */

/*
 GET all Elements surrounding selected Element
 console.log($("div").siblings());
 */

/*
 Self explanatory
 .next()
 * .nextAll()
 * .nextUntil()
 * .prev()
 * .prevAll()
 * .prevUntil();
 */

/*
 get the first element matching the selector
 $("div").first();
 get the last element matching the selector
 $("div").last();
 */

/*
 Get 3rd Element from h2-elements>3
 $("h2").eq(2)
 */

/*
 //Filter selection with function or paramenter
 .filter();
 //opposite
 .not();
 */