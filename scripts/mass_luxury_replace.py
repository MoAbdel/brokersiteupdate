import os

base = r"C:\Users\haithem\projects\brokersiteupdate\.claude\worktrees\slice-2-4-scenarios-luxury-sweep"
skip_rels = {'lib/disposition/luxury-urls.ts', 'middleware.ts'}
skip_patterns_lower = ['luxury amenities','luxury finishes','luxury appli','luxury kitchen','luxury bath','luxury features','luxury interior','luxury fixture']

global_replacements = [
    ('luxury home financing', 'high-value home financing'),
    ('Luxury Home Financing', 'High-Value Home Financing'),
    ('luxury home specialist', 'jumbo home specialist'),
    ('Luxury Home Specialist', 'Jumbo Home Specialist'),
    ('luxury market specialist', 'high-value market specialist'),
    ('Luxury Market Specialist', 'High-Value Market Specialist'),
    ('luxury coastal market', 'high-value coastal market'),
    ('luxury coastal markets', 'high-value coastal markets'),
    ('luxury coastal properties', 'high-value coastal properties'),
    ('luxury coastal real estate', 'high-value coastal real estate'),
    ('luxury coastal homes', 'coastal homes'),
    ('luxury coastal home', 'coastal home'),
    ('luxury real estate', 'high-value real estate'),
    ('Luxury Real Estate', 'High-Value Real Estate'),
    ('luxury property specialist', 'high-value property specialist'),
    ('Luxury Property Specialist', 'High-Value Property Specialist'),
    ('luxury properties', 'high-value properties'),
    ('Luxury Properties', 'High-Value Properties'),
    ('luxury property', 'high-value property'),
    ('Luxury Property', 'High-Value Property'),
    ('luxury homebuyers', 'homebuyers'),
    ('luxury home buyers', 'home buyers'),
    ('luxury home buyer', 'home buyer'),
    ('luxury homeowner', 'homeowner'),
    ('luxury homeowners', 'homeowners'),
    ('luxury market', 'high-value market'),
    ('Luxury Market', 'High-Value Market'),
    ('luxury markets', 'high-value markets'),
    ('Luxury Markets', 'High-Value Markets'),
    ('luxury financing', 'high-value financing'),
    ('Luxury Financing', 'High-Value Financing'),
    ('luxury segment', 'high-value segment'),
    ('luxury tier', 'higher-end tier'),
    ('luxury buyer', 'high-value buyer'),
    ('luxury buyers', 'high-value buyers'),
    ('luxury seller', 'seller'),
    ('luxury borrower', 'high-value borrower'),
    ('luxury borrowers', 'borrowers'),
    ('luxury lending', 'jumbo lending'),
    ('luxury lender', 'jumbo lender'),
    ('luxury lenders', 'jumbo lenders'),
    ('luxury loan', 'jumbo loan'),
    ('luxury loans', 'jumbo loans'),
    ('luxury renovation', 'home renovation'),
    ('Luxury Renovation', 'Home Renovation'),
    ('luxury renovations', 'home renovations'),
    ('Luxury renovations', 'Home renovations'),
    ('luxury home', 'high-value home'),
    ('Luxury home', 'High-value home'),
    ('luxury homes', 'high-value homes'),
    ('Luxury homes', 'High-value homes'),
    ('luxury estate', 'high-value estate'),
    ('Luxury estate', 'High-value estate'),
    ('luxury estates', 'high-value estates'),
    ('Luxury estates', 'High-value estates'),
    ('luxury appraisal', 'property appraisal'),
    ('Luxury Appraisal', 'Property Appraisal'),
    ('luxury expertise', 'high-value expertise'),
    ('Luxury expertise', 'High-value expertise'),
    ('luxury waterfront', 'waterfront'),
    ('luxury condo', 'upscale condo'),
    ('Luxury condo', 'Upscale condo'),
    ('luxury condos', 'upscale condos'),
    ('Luxury Condos', 'Upscale Condos'),
    ('luxury community', 'gated community'),
    ('Luxury community', 'Gated community'),
    ('luxury communities', 'high-value communities'),
    ('Luxury communities', 'High-value communities'),
    ('luxury townhome', 'premium townhome'),
    ('luxury townhomes', 'premium townhomes'),
    ('luxury suburban', 'upscale suburban'),
    ('Luxury suburban', 'Upscale suburban'),
    ('luxury vertical living', 'high-rise living'),
    ('luxury gated', 'gated'),
    ('Luxury gated', 'Gated'),
    ('luxury area', 'high-value area'),
    ('luxury areas', 'high-value areas'),
    ('Luxury areas', 'High-value areas'),
    ('luxury transaction', 'high-value transaction'),
    ('luxury transactions', 'high-value transactions'),
    ('luxury listings', 'higher-priced listings'),
    ('luxury island', 'island'),
    ('luxury island community', 'island community'),
    ('luxury high-rise', 'high-rise'),
    ('luxury development', 'upscale development'),
    ('luxury developments', 'upscale developments'),
    ('luxury pricing', 'premium pricing'),
    ('Luxury pricing', 'Premium pricing'),
]

total_files = 0
total_replacements = 0

for root, dirs, files_list in os.walk(base):
    dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', '.next']]
    for fn in files_list:
        if not fn.endswith(('.tsx', '.ts')):
            continue
        fp = os.path.join(root, fn)
        rel = fp[len(base):].replace('\\', '/').lstrip('/')
        if rel in skip_rels:
            continue
        try:
            c = open(fp, encoding='utf-8').read()
        except:
            continue
        if 'luxury' not in c.lower():
            continue
        orig = c
        n_rep = 0
        for old, new in global_replacements:
            if old in c:
                count = c.count(old)
                c = c.replace(old, new)
                n_rep += count
        if c != orig:
            open(fp, 'w', encoding='utf-8').write(c)
            total_files += 1
            total_replacements += n_rep
            print(f"  {n_rep:3d} replacements: {rel}")

print(f"\nTotal: {total_files} files, {total_replacements} replacements")
