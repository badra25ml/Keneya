
package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import play.api.i18n.{I18nSupport, MessagesApi, Messages, Lang}

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(val messagesApi: MessagesApi) extends Controller with I18nSupport{

  
  
  /**
   * Create an Action to render an HTML page with a welcome message.
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
//  def index = Action { request =>
//  Ok("Languages: " + request.acceptLanguages.map(_.code).mkString(", "))
//}
//  
  def changeLangfrench = Action{ implicit request =>
    val locale = request.getQueryString("locale").getOrElse("fr")
    Ok(views.html.index("Your new application is ready.")).withLang(Lang(locale))   
  }
  
  def changeLangbambara = Action{ implicit request =>
    val bambara = request.getQueryString("locale").getOrElse("bm")
    Ok(views.html.index("Your new application is ready.")).withLang(Lang(bambara))
    
    
  }
  
  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def login = Action {
    Ok(views.html.login("Keneya Login"))
  }
  def aboutus = Action {
    Ok(views.html.aboutus("keneya About us"))
  }
  def contactus = Action {
    Ok(views.html.contactus("keneya Contact us"))
  }
    
      def bambara = Action {
    Ok(views.html.bambara("keneya Bambara page"))
  }
     
}

