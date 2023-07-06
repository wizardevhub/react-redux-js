import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `Yumoto Murai - ${pageTitle}`;
	}, [pageTitle]);
};
