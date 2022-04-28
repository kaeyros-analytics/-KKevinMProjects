import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrivacyPolicyRoutingModule} from './components/pages/privacy-policy/privacy-policy-routing.module';

const routes: Routes = [
  // Home
  {path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: {breadcrumb: 'Startseite'}},
  // {
  //   path: 'home-v2',
  //   loadChildren: () => import('./components/pages/home-two/home-two.module').then(m => m.HomeTwoModule),
  //   data: {breadcrumb: 'Homepage'}
  // },
  // {
  //   path: 'home-v3',
  //   loadChildren: () => import('./components/pages/home-three/home-three.module').then(m => m.HomeThreeModule),
  //   data: {breadcrumb: 'Homepage'}
  // },
  // {
  //   path: 'home-v4',
  //   loadChildren: () => import('./components/pages/home-four/home-four.module').then(m => m.HomeFourModule),
  //   data: {breadcrumb: 'Homepage'}
  // },
  // {
  //   path: 'home-v5',
  //   loadChildren: () => import('./components/pages/home-five/home-five.module').then(m => m.HomeFiveModule),
  //   data: {breadcrumb: 'Homepage'}
  // },
  // About
  {
    path: 'about',
    loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule),
    data: {breadcrumb: 'Uber uns'}
  },
  // spenden
  {
    path: 'donate',
    loadChildren: () => import('./components/pages/spenden/spenden.module').then(m => m.SpendenModule),
    data: {breadcrumb: 'Spenden'}
  },
  // Shop
  {
    path: 'shop-left',
    loadChildren: () => import('./components/pages/shop-left/shop-left.module').then(m => m.ShopLeftModule),
    data: {breadcrumb: 'Shop Left'}
  },
  {
    path: 'shop-right',
    loadChildren: () => import('./components/pages/shop-right/shop-right.module').then(m => m.ShopRightModule),
    data: {breadcrumb: 'Shop Right'}
  },
  {
    path: 'shop/cat/:catId',
    loadChildren: () => import('./components/pages/shop-left/shop-left.module').then(m => m.ShopLeftModule),
    data: {breadcrumb: 'Shop Left'}
  },
  {
    path: 'shop/tag/:tagId',
    loadChildren: () => import('./components/pages/shop-left/shop-left.module').then(m => m.ShopLeftModule),
    data: {breadcrumb: 'Shop Left'}
  },
  {
    path: 'shop/:minPrice/:maxPrice',
    loadChildren: () => import('./components/pages/shop-left/shop-left.module').then(m => m.ShopLeftModule),
    data: {breadcrumb: 'Shop Left'}
  },
  {
    path: 'shop-details/:id',
    loadChildren: () => import('./components/pages/shop-details/shop-details.module').then(m => m.ShopDetailsModule),
    data: {breadcrumb: 'Shop Details'}
  },
  // Pages(Donation)
  {
    path: 'donation-grid',
    loadChildren: () => import('./components/pages/donation-archive/donation-archive.module').then(m => m.DonationArchiveModule),
    data: {breadcrumb: 'Donation Archive'}
  },

  // Board Of Directors
  {
    path: 'board-of-directors',
    loadChildren: () => import('./components/pages/executive-board/executive-board.module').then(m => m.ExecutiveBoardModule),
    data: {breadcrumb: 'Vorstand'}
  },
  // Law
  {
    path: 'law',
    loadChildren: () => import('./components/pages/law/law.module').then(m => m.LawModule),
    data: {breadcrumb: 'Satzung'}
  },
  // Become a member
  {
    path: 'become-a-member',
    loadChildren: () => import('./components/pages/become-a-member/become-a-member.module').then(m => m.BecomeAMemberModule),
    data: {breadcrumb: 'Mitglied Werden'}
  },
  // Become a volunter
  {
    path: 'become-a-volunteer',
    loadChildren: () => import('./components/pages/become-a-volunter/become-a-volunter.module').then(m => m.BecomeAVolunterModule),
    data: {breadcrumb: 'Freiwilliger werden'}
  },
  {
    path: 'donation/cat/:catId',
    loadChildren: () => import('./components/pages/donation-archive/donation-archive.module').then(m => m.DonationArchiveModule),
    data: {breadcrumb: 'Donation Archive'}
  },
  {
    path: 'donation/tag/:tagId',
    loadChildren: () => import('./components/pages/donation-archive/donation-archive.module').then(m => m.DonationArchiveModule),
    data: {breadcrumb: 'Donation Archive'}
  },
  {
    path: 'donation-details/:id',
    loadChildren: () => import('./components/pages/donation-details/donation-details.module').then(m => m.DonationDetailsModule),
    data: {breadcrumb: 'Donation Details'}
  },
  // Pages(Extra)
  {
    path: 'wishlist',
    loadChildren: () => import('./components/pages/wishlist/wishlist.module').then(m => m.WishlistModule),
    data: {breadcrumb: 'Wishlist'}
  },
  {path: 'cart', loadChildren: () => import('./components/pages/cart/cart.module').then(m => m.CartModule), data: {breadcrumb: 'Cart'}},
  {
    path: 'checkout',
    loadChildren: () => import('./components/pages/checkout/checkout.module').then(m => m.CheckoutModule),
    data: {breadcrumb: 'Checkout'}
  },
  {
    path: 'contact',
    loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule),
    data: {breadcrumb: 'Kontakt'}
  },
  {
    path: 'login',
    loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule),
    data: {breadcrumb: 'Login'}
  },
  {
    path: 'register',
    loadChildren: () => import('./components/pages/register/register.module').then(m => m.RegisterModule),
    data: {breadcrumb: 'Register'}
  },
  {
    path: 'error-404',
    loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule),
    data: {breadcrumb: 'Error 404'}
  },
  // Blog
  {
    path: 'blog/cat/:catId',
    loadChildren: () => import('./components/pages/blog-left/blog-left.module').then(m => m.BlogLeftModule),
    data: {breadcrumb: 'Blog Left'}
  },
  {
    path: 'blog/author/:authorId',
    loadChildren: () => import('./components/pages/blog-left/blog-left.module').then(m => m.BlogLeftModule),
    data: {breadcrumb: 'Blog Left'}
  },
  {
    path: 'blog/tag/:tagId',
    loadChildren: () => import('./components/pages/blog-left/blog-left.module').then(m => m.BlogLeftModule),
    data: {breadcrumb: 'Blog Left'}
  },
  {
    path: 'blog-left',
    loadChildren: () => import('./components/pages/blog-left/blog-left.module').then(m => m.BlogLeftModule),
    data: {breadcrumb: 'Blog Left'}
  },
  {
    path: 'blog-right',
    loadChildren: () => import('./components/pages/blog-right/blog-right.module').then(m => m.BlogRightModule),
    data: {breadcrumb: 'Blog Right'}
  },
  {
    path: 'blog-details/:id',
    loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule),
    data: {breadcrumb: 'Blog Details'}
  },
  // privacy-policy
  {
    path: 'privacy-policy',
    loadChildren: () => import('./components/pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule),
    data: {breadcrumb: 'Datenschutzerklärung'}
  },
  // Story
  {
    path: 'story/tag/:tagId',
    loadChildren: () => import('./components/pages/story-grid/story-grid.module').then(m => m.StoryGridModule),
    data: {breadcrumb: 'Projekte'}
  },

  
  // Imprint
  {
    path: 'imprint',
    loadChildren: () => import('./components/pages/imprint/imprint.module').then(m => m.ImprintModule),
    data: {breadcrumb: 'Impressum'}
  },

  {
    path: 'project',
    loadChildren: () => import('./components/pages/story-grid/story-grid.module').then(m => m.StoryGridModule),
    data: {breadcrumb: 'Projekte'}
  },
  {
    path: 'search-result/:value',
    loadChildren: () => import('./components/pages/search-result/search-result.module').then(m => m.SearchResultModule),
    data: {breadcrumb: ''}
  },
  {
    path: 'project/:id',
    loadChildren: () => import('./components/pages/story-details/story-details.module').then(m => m.StoryDetailsModule),
    data: {breadcrumb: 'Projekte'}
  },
  // Error 404
  {
    path: '**',
    loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule),
    data: {breadcrumb: 'Error 404'}
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
