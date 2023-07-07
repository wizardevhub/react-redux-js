import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `Sven Rony - ${pageTitle}`;
	}, [pageTitle]);
};
