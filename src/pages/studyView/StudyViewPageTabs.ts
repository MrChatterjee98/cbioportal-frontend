export enum StudyViewPageTabKeyEnum {
    SUMMARY = 'summary',
    SUMMARY_COLUMN_STORE = 'summaryColumnStore',
    CLINICAL_DATA = 'clinicalData',
    HEATMAPS = 'heatmaps',
    CN_SEGMENTS = 'cnSegments',
    FILES_AND_LINKS = 'filesAndLinks',
    PLOTS = 'plots',
}

export const StudyViewResourceTabPrefix = 'openResource_';

export function getStudyViewResourceTabId(resourceId: string) {
    return `${StudyViewResourceTabPrefix}${resourceId}`;
}

export function extractResourceIdFromTabId(tabId: string) {
    const match = new RegExp(`${StudyViewResourceTabPrefix}(.*)`).exec(tabId);
    if (match) {
        return match[1];
    } else {
        return undefined;
    }
}
