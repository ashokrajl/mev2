import '@testing-library/jest-dom/extend-expect';
import Layout from '.';
import { render } from '../../test/utils';

it('Layout is rendered', async () => {
    const { getByTestId } = render(
        <Layout>
            <p>This is sample content</p>
        </Layout>
    );
    expect(getByTestId('container')).toBeInTheDocument();
});
