import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Download, Globe, Eye, Scan, Palette, Save } from 'lucide-react';
import BlurryIcon from '../assets/blurryicon.png';

export default function Home() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ja' ? 'en' : 'ja';
    i18n.changeLanguage(newLang);
  };

  const appStoreUrl = 'https://apps.apple.com/us/app/blurry-hide-your-face/id6752717271';

  // Set document title and meta description based on language
  React.useEffect(() => {
    document.title = t('hero.title') + ' | AI-Powered Privacy Protection App';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('hero.subtitle') + ' - ' + t('features.subtitle'));
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    
    if (ogTitle) ogTitle.setAttribute('content', t('hero.title') + ' | AI-Powered Privacy Protection App');
    if (ogDescription) ogDescription.setAttribute('content', t('hero.subtitle') + ' - ' + t('features.subtitle'));
    if (twitterTitle) twitterTitle.setAttribute('content', t('hero.title') + ' | AI-Powered Privacy Protection App');
    if (twitterDescription) twitterDescription.setAttribute('content', t('hero.subtitle') + ' - ' + t('features.subtitle'));
    
    // Update html lang attribute
    document.documentElement.lang = i18n.language;
  }, [t, i18n.language]);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={BlurryIcon} 
              alt="Blurry app logo" 
              className="w-10 h-10 rounded-xl"
              width="40"
              height="40"
              loading="eager"
              decoding="async"
            />
            <span className="text-xl font-bold text-gray-900">Blurry</span>
          </div>
          <nav aria-label="Language selection">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              aria-label={`Switch to ${i18n.language === 'ja' ? 'English' : 'Japanese'}`}
            >
              <Globe className="w-4 h-4" aria-hidden="true" />
              {i18n.language === 'ja' ? 'EN' : 'JA'}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20" role="banner">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img 
              src={BlurryIcon} 
              alt="Blurry app icon - AI-powered face hiding application" 
              className="w-24 h-24 rounded-3xl mx-auto mb-6 shadow-lg"
              width="96"
              height="96"
              loading="eager"
              decoding="async"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
              aria-label="Download Blurry app from App Store"
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              {t('hero.downloadButton')}
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-4xl font-bold text-gray-900 mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('features.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8" role="list">
            <article className="text-center p-6" role="listitem">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
                <Scan className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('features.feature1.title')}
              </h3>
              <p className="text-gray-600">
                {t('features.feature1.description')}
              </p>
            </article>
            <article className="text-center p-6" role="listitem">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('features.feature2.title')}
              </h3>
              <p className="text-gray-600">
                {t('features.feature2.description')}
              </p>
            </article>
            <article className="text-center p-6" role="listitem">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
                <Save className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('features.feature3.title')}
              </h3>
              <p className="text-gray-600">
                {t('features.feature3.description')}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('screenshots.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('screenshots.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl mb-4 flex items-center justify-center">
                <img
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=iPhone%20screenshot%20showing%20photo%20editing%20app%20with%20face%20blur%20feature%2C%20modern%20purple%20UI%2C%20clean%20interface&image_size=portrait_16_9"
                  alt={t('screenshots.screenshot1.alt')}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('screenshots.screenshot1.title')}
              </h3>
              <p className="text-gray-600">
                {t('screenshots.screenshot1.description')}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl mb-4 flex items-center justify-center">
                <img
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=iPhone%20screenshot%20showing%20one%20click%20save%20feature%20in%20photo%20app%2C%20purple%20theme%2C%20simple%20UI&image_size=portrait_16_9"
                  alt={t('screenshots.screenshot2.alt')}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('screenshots.screenshot2.title')}
              </h3>
              <p className="text-gray-600">
                {t('screenshots.screenshot2.description')}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl mb-4 flex items-center justify-center">
                <img
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=iPhone%20screenshot%20showing%20simple%20editing%20screen%20with%20face%20detection%20and%20blur%20controls%2C%20purple%20interface&image_size=portrait_16_9"
                  alt={t('screenshots.screenshot3.alt')}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('screenshots.screenshot3.title')}
              </h3>
              <p className="text-gray-600">
                {t('screenshots.screenshot3.description')}
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-purple-600" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            {t('cta.subtitle')}
          </p>
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Download Blurry app from App Store - Call to action"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            {t('cta.downloadButton')}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center" aria-hidden="true">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">Blurry</span>
              </div>
              <p className="text-gray-400">
                {t('footer.description')}
              </p>
            </div>
            <nav aria-labelledby="footer-links">
              <h3 id="footer-links" className="text-lg font-semibold mb-4">{t('footer.links.title')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                    {t('footer.links.terms')}
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    {t('footer.links.privacy')}
                  </Link>
                </li>
              </ul>
            </nav>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.download.title')}</h3>
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Download Blurry app from App Store - Footer link"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                {t('footer.download.appStore')}
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}