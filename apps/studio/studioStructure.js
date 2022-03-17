import S from '@sanity/desk-tool/structure-builder'

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Homepage')
                .child(
                    S.document().schemaType('homepage').documentId('homepage2')
                ),
            ...S.documentTypeListItems().filter(
                (listItem) => !['homepage'].includes(listItem.getId())
            ),
        ])
