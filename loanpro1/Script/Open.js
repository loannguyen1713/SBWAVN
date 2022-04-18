function Open()
{
  //Runs the "Orders" tested application.
  TestedApps.Orders.Run(1, true);
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  //Rotates the mouse wheel to -1 over the 'Group' object.
  Aliases.Orders.OrderForm.Group.MouseWheel(-1);
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(154, 6);
  //Enters the text 'a' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("a");
  //Clicks the 'Street' object.
  Aliases.Orders.OrderForm.Group.Street.Click(114, 14);
  //Enters the text 'a' in the 'Street' text editor.
  Aliases.Orders.OrderForm.Group.Street.SetText("a");
  //Clicks the 'State' object.
  Aliases.Orders.OrderForm.Group.State.Click(83, 13);
  //Enters the text 'a' in the 'State' text editor.
  Aliases.Orders.OrderForm.Group.State.SetText("a");
  //Clicks the 'City' object.
  Aliases.Orders.OrderForm.Group.City.Click(42, 13);
  //Enters the text 'a' in the 'City' text editor.
  Aliases.Orders.OrderForm.Group.City.SetText("a");
  //Clicks the 'Zip' object.
  Aliases.Orders.OrderForm.Group.Zip.Click(29, 5);
  //Enters the text 'a' in the 'Zip' text editor.
  Aliases.Orders.OrderForm.Group.Zip.SetText("a");
  //Clicks the 'CardNo' object.
  Aliases.Orders.OrderForm.Group.CardNo.Click(214, 8);
  //Enters the text 'a' in the 'CardNo' text editor.
  Aliases.Orders.OrderForm.Group.CardNo.SetText("a");
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("File|Exit");
  //Clicks the 'btnYes' button.
  Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
  //Clicks the 'btnCancel' button.
  Aliases.Orders.dlgSaveAs.btnCancel.ClickButton();
}